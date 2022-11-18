import { useEffect, useState } from "react";

function NewRidePost({addPostRide}) {

    const[newDate, setNewDate] = useState("");
    const[newFirstName, setNewFirstName] = useState("")
    const[newLastName, setNewLastName] = useState("")
    const[newImage, setNewImage] = useState([])
    const[imageURLs, setImageURLs] = useState([])
    const[newPrice, setNewPrice] = useState(0)
    const[newDeparture, setNewDeparture] = useState("")
    const[newDestination, setNewDestination] = useState("")
    const[newNumSeats, setNewNumSeats] = useState(0)

    useEffect(() => {
        if(newImage.length < 1) return;
        const newImageURLs = [];
        newImage.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs)

    }, [newImage]);

    function onImageChange(e){
        setNewImage([...e.target.files])
    }

    function handleAddPostRide(e) {
        e.preventDefault();

        const newRide = {
            image:newImage,
            date:newDate,
            firstname:newFirstName,
            lastname:newLastName,
            departure:newDeparture,
            destination:newDestination,
            price:newPrice,
            seats:newNumSeats
        }

        addPostRide(newRide)
        
        setNewImage("");
        setNewDate("");
        setNewFirstName("");
        setNewLastName("");
        setNewDeparture("");
        setNewDestination("");
        setNewPrice(0);
        setNewNumSeats(0);
    }

    let currDate = new Date();
    let year = currDate.getFullYear();
    let month = currDate.getMonth() + 1;
    let day = currDate.getDate();

let currentDateString = `${year}-${month}-${day}`;

    return (
        <div id="newRidePost">
            <h2>Post Ride</h2>
            <form onSubmit={handleAddPostRide}>
                <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} name="firstName" placeholder="FirstName" required />
                <input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} name="LastName" placeholder="LastName" required />
                <p></p>
                <input type="text" value={newDeparture} onChange={(e) => setNewDeparture(e.target.value)} name="departure" placeholder="Departure" required />
                <input type="text" value={newDestination} onChange={(e) => setNewDestination(e.target.value)} name="destination" placeholder="Destination" required />
                <p></p>
                <input type="date" min={currentDateString} value={newDate} onChange={(e) => setNewDate(e.target.value)} name="date" required />
                <input type="number"  min="1" max="9" value={newNumSeats} onChange={(e) => setNewNumSeats(e.target.value)} name="Seats" placeholder="Seats" required />
                <input type="number"  step="any" min="1.0" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} name="price" placeholder="Price" required />
                <p></p>
               <input type="file" multiple accept="image/*" onChange={onImageChange} />
               {imageURLs.map(imageSrc => <img src={imageSrc} />)}
                <button type="submit">Post Ride</button>
            </form>
        </div>
    );
}

export default NewRidePost;