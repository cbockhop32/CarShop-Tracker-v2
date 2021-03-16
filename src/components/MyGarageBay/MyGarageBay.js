import React from 'react';
import './MyGarageBay.scss';
import { numberWithCommas } from '../../styles/formatting';


// Component that renders all the Car's details when selected within the MyGarage parent component

function MyGarageBay({car}) {
    let CarImg;
    let GarageBayOutput;
    let CarListingLink;


    // Generates default car icon if no image was uploaded
    if(car.imgUrl !== undefined) {
        CarImg = <img className="HeaderImg" src={car.imgUrl} alt={car.id}></img>;
    } else {
        CarImg = <i className="fas fa-car fa-10x"  ></i>;
    }

    // If there is no listing link added then it won't render a List Link
    if(car.listing !== undefined) {
       CarListingLink = <a href={car.listing}  target="_blank" rel="noopener noreferrer"><button className="Btn-ListingLink">Link to Online Listing</button></a>;
    }

    if(car) {
        GarageBayOutput = (
            <div className="MyGarageBay">
            <div className="MyGarageBay-Inner">
                <h1>{car.year} {car.make} {car.model} {car.trim}</h1>
                <div className="InnerHeader">
                    <div className="InnerHeader-Title">
                        <div className="Title-Single">
                            <strong>Price:</strong><p>${numberWithCommas(car.price)}</p>
                        </div>

                        <div className="Title-Single">
                            <strong>Mileage:</strong><p>{numberWithCommas(car.mileage)} miles</p>
                        </div>
                        <div className="Title-Single">
                            <strong>Location:</strong><p>{car.location}</p>
                        </div>
                        {CarListingLink}
                    </div>
                    <div className="HeaderImg-Container"> 
                        {CarImg}
                    </div>      
                </div>
                
                <div className="InnerDetails">
                    <div className="InnerDetails-Options">
                        <div className="InnerDetails-Title">Options</div>
                        <ul className="InnerDetails-Options-Content" >
                            {car.options.map(option => <li key={option.id}>{option.name}</li>)}
                        </ul>
                    </div>
                    <div className="InnerDetails-Comments">
                        <div className="InnerDetails-Title">Comments</div>
                        <p className="InnerDetails-Comments-Content">{car.comments}</p>
                    </div>
                </div>                
            </div>
        </div> )
    }



    return (
       GarageBayOutput
    )
}

export default MyGarageBay
