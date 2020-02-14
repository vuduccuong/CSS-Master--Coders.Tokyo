import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import axios from 'axios';
//import "./css/style.css";

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:90/Advertising/GetSlideLeft')
            .then(res => {
                //const items = res.data.datas.children.map(obj => obj.data);
                const items = res.data.datas.listSlide;
                this.setState({
                    isLoaded: false,
                    items: items
                });
            });

    render() {
        const { error, isLoaded, items } = this.state;
        //const isLoggedIn = false;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <Fragment>
                    <div className="fs-asleft">
                        <div id="fowl1" className="owl-carousel f-slsl">
                            {
                                items.map((item, index) => {
                                    debugger;
                                    let strTemp = "";

                                    if (item.id === 0) {
                                        strTemp = "/Uploads/images/Banner/banner-dat-truoc-galaxy-note.gif";
                                    }
                                   return( <div className="item" key={index}>
                                        <a target="_blank" href="/" title="" />
                                        {
                                            if(true){
                                                
                                            }
                                        }
                                    </div>
                                   )
                                })
                            }
                        </div>

                    </div>
                    <div>
                        {items.map((post) =>
                            <li key={post.name}>
                                {post.name}
                            </li>
                        )}
                    </div>
                </Fragment>
            )

        }
    }
}
    export default Slide;