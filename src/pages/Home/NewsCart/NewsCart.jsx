import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareNodes, FaRegStar,FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating, } = news
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex  align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p>{author?.name}</p>
                    <p><small>{moment(author.published_date).format('yyyy-MM-DD')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareNodes></FaShareNodes>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex ">
                <div className='flex-grow-1'>
                    <Rating className='pe-2'
                      placeholderRating={3.5}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;