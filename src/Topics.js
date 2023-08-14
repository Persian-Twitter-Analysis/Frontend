import './App.css';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import { Link } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {Button} from 'antd'
import { useLocation } from 'react-router-dom';


const Topics = () => {

      const {state} = useLocation();
      const images_distance = parseInt(state.all_data.images_distance)
      const tweets_distance = parseInt(state.all_data.tweets_distance)
      const tweet_image_dist = parseInt(state.all_data.images_tweets_distance)
      const images_topics = state.all_data.images_topics.split('#').map(str => {
        return parseInt(str, 10);
      });
      const tweets_topics = state.all_data.tweets_topics.split('#').map(str => {
        return parseInt(str, 10);
      });

      console.log(images_distance)
      console.log(tweets_distance)

      console.log(tweet_image_dist)

      console.log(images_topics)

      console.log(tweets_topics)


    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingRight: 10}} >
        
        <Link to='/charts' state={state}>
        <Button icon={<LeftOutlined />} size='large' style={{marginLeft: 40}} danger ghost>Prev</Button>
        </Link>

        <div className='bottom-container'>
        <div className='topics'>

            <h3>Topics of Your Tweets</h3>
            <hr />

            <p>Political</p>
            <div className="task-progress-2" >
              <ProgressBarComponent cornerRadius='100%' id="lineardeterminate" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
            </div>
            <br></br>


            <p>Social</p>
            <div className="task-progress-2" >
              <ProgressBarComponent id="lineardeterminate1" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
            </ProgressBarComponent>
            </div>
            <br></br>

            <p>International</p>
            <div className="task-progress-2" >
              <ProgressBarComponent id="lineardeterminate2" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
            </ProgressBarComponent>
            </div>
            <br></br>

            <p>Economics</p>
            <div className="task-progress-2">
              <ProgressBarComponent id="lineardeterminate3" type='Linear' showProgressValue={true} progressColor="#08a0f7" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
            </div>
            <br></br>


            <p>Science/Technology</p>
            <div className="task-progress-2">
              <ProgressBarComponent id="lineardeterminate4" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
            </div>
            <br></br>

            <p>Cultural Art</p>
            <div className="task-progress-2">
              <ProgressBarComponent id="lineardeterminate5" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
            </div>
            <br></br>

            <p>Sport</p>
            <div className="task-progress-2">
              <ProgressBarComponent id="lineardeterminate6" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
            </div>
            <br></br>

            <p>Medical</p>
            <div className="task-progress-2">
              <ProgressBarComponent id="lineardeterminate7" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
            </div>

        </div>

        <div className='topics'>

        <h3>Topics of Your Media Images</h3>
        <hr />

        <p>Animal</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate8" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>

        <p>Landscape</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate9" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Sport</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate10" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Text</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate11" type='Linear' showProgressValue={true} progressColor="#08a0f7" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Art</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate12" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Object</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate13" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Food</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate14" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>People</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate15" type='Linear' showProgressValue={true} progressColor="#08a0f7" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Movie</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate16" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Shop</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate17" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>Music</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate18" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>

        </div>
            </div>
                <Button icon={<RightOutlined />} disabled dir='rtl' size='large' style={{marginRight: 35}} danger ghost>Next</Button>
            </div>

            )
        }

export default Topics;