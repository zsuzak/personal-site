import React, { Component } from 'react'
import axios from 'axios'
import ImageScroller from 'react-image-scroller'

import Aux from '../../hoc/Aux/Aux'
import Image from '../../components/Image/Image'
import Description from '../../components/Text/Description/Description'
import classes from './Gallery.module.css'

class Gallery extends Component {
    state = {
        images: [],
        filter: true
    }

    componentDidMount () {
        axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3f512a426170f3b1734a0f4d2dbf5048&user_id=161576192@N05&extras=url_l%2C+date_taken&per_page=999&format=json&nojsoncallback=1')
            .then(res => {
                let pics = res.data.photos.photo.sort((a,b) => {
                    return (a.datetaken > b.datetaken) ? -1 : ((a.datetaken < b.datetaken) ? 1 : 0)
                });

                this.setState({images: pics})
            })
            .catch(err => {
                this.setState({error: true})
            })
    }

    filterToggle = () => {
        let grayscaleToggle = !this.state.filter
        this.setState({filter: grayscaleToggle})
    }

    render () {
        return (
            <Aux>
                <Description />

                <div className={this.state.filter ? classes.on : classes.off}>
                    <ImageScroller>
                        {this.state.images.map(image => {
                                return <Image clicked={this.filterToggle} key={image.id} source={image.url_l} dateTaken={image.datetaken} />
                            })}
                    </ImageScroller>
                </div>
            </Aux>
            
        )
    }
}

export default Gallery;