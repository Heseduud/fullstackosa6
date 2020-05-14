import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return props.notif !== ''
  ? <div style={style}>{props.notif}</div>
  : <div></div> 
}

const mapStateToProps = (state) => {
  return {
    notif: state.notification
  }
}

const connectedNotification = connect(mapStateToProps)(Notification)

export default connectedNotification