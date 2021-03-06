import React, { Component } from 'react'
import styled from 'styled-components'
import { AudioOutlined, EditOutlined,  } from '@ant-design/icons'
import { Divider, Typography } from 'antd'
import MicrophoneContainer from './MicrophoneContainer'
import TextContainer from './TextContainer'
import '../convenience.css'

const Body = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ControlsWrapper = styled.div`
    height: 85%;
    width: 80%;
    display: flex;
    flex-direction: column;
`

const DisplayArea = styled.div`
    height: 100%;
    width: 100%;
`

const SwitchBox = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direciton: row;
    justify-content: center;
    align-items: center;
`

export default class Recorder extends Component {
    constructor(props) {
        super(props)
    
        this.unsubscribe = undefined
        this.state = {
            type: 0 
        }
    }
    
    changeType = (type) => {
        this.setState({type})
    }
   
    render() {
        return (
            <Body>
                <ControlsWrapper>
                    <DisplayArea>
                        {(this.state.type === 0 && !this.state.entryCompleted) ? <MicrophoneContainer></MicrophoneContainer> : <TextContainer></TextContainer>}
                    </DisplayArea>
                    <SwitchBox>
                        <AudioOutlined onClick={() => this.changeType(0)} className={`iconStyleLarge ${this.state.type === 0 ? "selectedIcon" : "deselectedIcon"}`} />
                        <Divider style={{marginLeft: "30px", marginRight: "30px", height: "80%"}} type="vertical"/>
                        <EditOutlined onClick={() => this.changeType(1)} className={`iconStyleLarge ${this.state.type === 1 ? "selectedIcon" : "deselectedIcon"}`} />
                    </SwitchBox>
                </ControlsWrapper>
            </Body>
        )
    }
}
