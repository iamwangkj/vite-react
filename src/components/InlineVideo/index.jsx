import React from 'react'
import { JoImage, JoExpose } from '@jdcop/e-ui'
import { versionCompare, getIOSVersion, getAndroidVersion } from '@jdcop/jdcop-taro-common'
import './index.scss'

class Mp4Video extends React.Component {
  constructor (props) {
    super(props)
    const { src, autoPlay } = this.props

    this.$video = null // ref 实例
    this.isActive = !!autoPlay // 是否自动播放（针对外部环境）
    this.isPlaying = null // 是否处于播放状态
    this.isExpose = false // 是否曝光
    this.visible = true // 是否页面可见
    this.curLoopCount = 1

    // 是否支持播放
    // this.$env.JD &&
    this.canPlay = this.$env.JD && src && (
      // 安卓 7以上、IOS 10以上 才播放视频
      versionCompare(getIOSVersion(), '10.0.0') > 0 ||
      versionCompare(getAndroidVersion(), '7.0.0') > 0
    )

    this.state = {
      isReady: false, // 视频是否准备就绪
      error: false, // 视频播放错误
      leftTime: ''
    }
  }

  componentDidMount () {
    document.addEventListener('qbrowserVisibilityChange', this.onVisibilityChange)
    document.addEventListener('visibilitychange', this.onVisibilityChange)
  }

  componentWillUnmount () {
    document.removeEventListener('qbrowserVisibilityChange', this.onVisibilityChange)
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
    clearInterval(this.interval)
  }

  /**
   * 比较两个对象是否相等
   * @return {boolean}
   */
  compareEqual = (a, b) => Object.keys(a).every(key => a[key] === b[key])
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.autoPlay !== nextProps.autoPlay) {
      setTimeout(() => {
        if (nextProps.autoPlay) {
          this.play()
        } else {
          this.pause()
        }
      })
    }
    return !this.compareEqual(nextProps, this.props) || !this.compareEqual(nextState, this.state)
  }

  /**
   * 处理视频播放失败
   */
  handleError = e => {
    this.props.onError(e)
    this.setState({
      error: true
    })
  }

  /**
   * 处理视频播放结束 loop模式不生效
   */
  handleEnded = () => {
    if (this.props.loopTime > 0 || (this.props.loopCount > 0 && this.props.loopCount > this.curLoopCount)) {
      this.$video.currentTime = this.props.loopTime > 0 ? this.props.loopTime : 0
      this.isPlaying = false
      if (this.props.loopCount > 0) {
        this.curLoopCount += 1
      }
      setTimeout(() => {
        this.play(true)
      })
    } else {
      this.props.onEnd()
    }
  }

  /**
   * 点击
   */
  handleClick = ({ isReady, error }) => {
    this.props.onClick({ isReady, error })
  }

  /**
   * 秒 转 分秒，如61, 01:01
   * @param {number} second 秒数
   * @returns {string} 返回格式化时间
   */
  formatTime (second) {
    const _num = +second
    const m = (`${Math.floor(_num / 60)}`).padStart(2, '0')
    const s = (`${Math.floor(_num % 60)}`).padStart(2, '0')
    return `${m} : ${s}`
  }

  /**
   * 监听视频进度，对进图条进行控制
   */
  handleTimeUpdate = () => {
    if (!this.$video) return
    // 视频准备就绪
    if (!this.state.isReady && this.$video.currentTime >= 0.01) {
      this.props.onStartPlay()
      this.setState({
        isReady: true
      })
    }

    const { duration, currentTime } = this.$video
    // 计算剩余时间
    const leftSecond = duration - currentTime
    const leftTime = this.formatTime(leftSecond)
    if (this.state.leftTime !== leftTime) {
      this.setState({
        leftTime
      })
    }

    // 导出视频时长更新回调
    this.props.onTimeUpdate(duration, currentTime)
  }

  /**
   * 切换播放状态
   * @param isPlay
   */
  changePlayStatus = isPlay => {
    setTimeout(() => {
      if (this.isActive) {
        if (isPlay) {
          setTimeout(() => {
            this.play(true)
          }, 400)
        } else {
          this.pause(true)
        }
      }
    }, 100)
  }

  onVisibilityChange = () => {
    this.visible = !document.hidden
    this.changePlayStatus(!document.hidden)
  }

  /**
   * 视频可见
   */
  handleExpose = isShow => {
    this.isExpose = isShow
    this.changePlayStatus(isShow)
    this.props.onExpose && this.props.onExpose()
  }

  /**
   * 播放视频
   */
  play = (isPure = false) => {
    if (!isPure) this.isActive = true
    if (this.isPlaying !== true && this.$video && this.isExpose && this.visible && this.isActive) {
      this.$video.play().then(() => {
        this.isPlaying = true
      }).catch(e => {
        this.handleError(e)
      })
    }
  }

  /**
   * 暂停视频
   */
  pause = (isPure = false) => {
    if (!isPure) this.isActive = false
    if (this.isPlaying === true && this.$video) {
      this.isPlaying = false
      this.$video.pause()
    }
  }

  render () {
    const { src, className, style, loop, loopTime, loopCount, muted, poster, errorPoster, afterSlot } = this.props
    const { isReady, error, leftTime } = this.state

    return (
      <div
        className={`mp4-video ${className}`}
        style={style}
        onClick={e => {
          e.stopPropagation()
          this.handleClick({ isReady, error })
        }}
      >
        <div className='mp4-video__cover'>
          <JoImage src={error && errorPoster ? errorPoster : poster}></JoImage>
          {/* {leftTime && <div className='timestamp'>{leftTime}</div>} */}
        </div>

        {this.canPlay && (
          <video
            ref={r => (this.$video = r)}
            className='mp4-video__target'
            webkit-playsinline='true'
            x5-video-player-type='h5-page'
            preload='true'
            src={src}
            poster={poster}
            playsInline
            loop={loop && loopTime <= 0 && loopCount <= 0}
            muted={muted}
            onTimeUpdate={this.handleTimeUpdate}
            onEnded={this.handleEnded}
          ></video>
        )}

        {this.canPlay && (
          <JoExpose loop onExpose={this.handleExpose}>
            <div className='mp4-video__expose'></div>
          </JoExpose>
        )}

        <div className={`mp4-video__cover absolute ${isReady && !error ? 'hide' : ''}`}>
          <JoImage src={error && errorPoster ? errorPoster : poster}></JoImage>
        </div>

        {afterSlot}
      </div>
    )
  }
}

Mp4Video.defaultProps = {
  src: '', // 视频链接
  poster: '', // 视频封面
  errorPoster: '', // 视频兜底封面
  muted: true, // 关闭、开启静音
  loopTime: 0, // 循环播放的时间节点（非原生循环播放，当且仅当 loop = false 时生效）
  loopCount: 0, // 循环播放的次数（非原生循环播放，当且仅当 loop = false 时生效）
  loop: false, // 是否启用视频原生循环播放，当且仅当 loopTime = 0 时生效
  autoPlay: true, // 自动播放
  className: '',
  afterSlot: null,
  onStartPlay: () => {}, // 视频刚开始播放
  onEnd: () => {}, // 播放结束，loop模式不生效
  onError: () => {}, // 播放失败
  onClick: () => {}, // 点击视频
  onTimeUpdate: () => {} // 视频播放过程中触发
}

export default Mp4Video
