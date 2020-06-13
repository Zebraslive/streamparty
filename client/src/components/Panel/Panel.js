import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from './Chat/Chat';
import Users from './Users/Users';
import QueueHistory from './QueueHistory/QueueHistory';
import Settings from './Settings/Settings';
import ReactTooltip from "react-tooltip";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import './Panel.css';

const Panel = ({
    currUser,
    updateCurrUser,
    room,
    history,
    videoProps,
    updateVideoProps,
    playerRef,
    sendVideoState,
    playVideoFromSearch,
    users
}) => {
    return (
        <div className="panelContainer">
            <Tabs forceRenderTabPanel={true}>
                <TabList>
                    <Tab data-tip="Chat"><FontAwesomeIcon icon="comment" /></Tab>
                    <Tab data-tip="Videos"><FontAwesomeIcon icon="stream" /></Tab>
                    <Tab data-tip="Users"><FontAwesomeIcon icon="users" /><sub>{users.length}</sub></Tab>
                    <Tab data-tip="Settings"><FontAwesomeIcon icon="cog" /></Tab>
                </TabList>

                <TabPanel>
                    <Chat
                        currUser={currUser}
                        users={users}
                    />
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel={true} className="subTabs">
                        <TabList>
                            <Tab>Queue</Tab>
                            <Tab>History</Tab>
                        </TabList>
                        <TabPanel>
                            <QueueHistory
                                currUser={currUser}
                                room={room}
                                videoProps={videoProps}
                                updateVideoProps={updateVideoProps}
                                playerRef={playerRef}
                                isQueue={true}
                                sendVideoState={sendVideoState}
                                playVideoFromSearch={playVideoFromSearch}
                            />
                        </TabPanel>
                        <TabPanel>
                            <QueueHistory
                                currUser={currUser}
                                room={room}
                                videoProps={videoProps}
                                updateVideoProps={updateVideoProps}
                                playerRef={playerRef}
                                isQueue={false}
                                sendVideoState={sendVideoState}
                                playVideoFromSearch={playVideoFromSearch}
                            />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Users
                        users={users}
                    />
                </TabPanel>
                <TabPanel>
                    <Settings
                        currUser={currUser}
                        updateCurrUser={updateCurrUser}
                        room={room}
                        history={history}
                        users={users}
                    />
                </TabPanel>
            </Tabs>
            <ReactTooltip effect="solid" place="bottom" />
        </div>
    );
}

export default Panel;