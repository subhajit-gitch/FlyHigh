import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Destination.css';
import swal from 'sweetalert';

function Destinations() {
  const [fromAirport, setfromAirport] = useState();
  const [toAirport, settoAirport] = useState();
  const [travellerCount, settravellerCount] = useState();
  const [classType, setclassType] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const bookticket = () => {

    fetch('http://localhost:8080/destinations', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        fromAirport: fromAirport,
        toAirport: toAirport,
        travellerCount: travellerCount,
        classType: classType,
        selectedDate: selectedDate,
        email: localStorage.getItem('email')
      })
    }).then(async data => {
      const response = await data.json();
      swal("Ok", "successfully ticket booked", "success")
      // document.querySelector('.response-message').innerText = response.message;
      // setTimeout(() => {
      //   document.querySelector('.response-message').innerText = '';
      // }, 2000)
    })
    setfromAirport("")
    settoAirport("")
    settravellerCount("")
    setclassType("")
    setSelectedDate("")
  }

  /*const bookticket = () => {

    const fromAirport = document.querySelector('#fromAirport').value;
    const toAirport = document.querySelector('#toAirport').value;
    const travellerCount = document.querySelector('#travellerCount').value;
    const classType = document.querySelector('#classType').value;
    const selectedDate = document.querySelector('#selectedDate').value;

    fetch('http://localhost:8080/bookticket', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        fromAirport,
        toAirport,
        travellerCount,
        classType,
        selectedDate
      })
    }).then(data => {
      document.querySelector('.response-message').innerText = 'Successfully Booked';
      setTimeout(() => {
        document.querySelector('.response-message').innerText = '';
      }, 2000)
    })
  }*/
  /*constructor(props) {
    super(props)

    this.state = {
      fromAirport: "",
      toAirport: "",
      travellerCount: "",
      classType: "",
      selectedDate: "",
    }
  }*/
  /*fromAirporthandler = (event) => {
    this.setState({
      fromAirport: event.target.value
    })
    console.log(fromAirport)
  }
  toAirporthandler = (event) => {
    this.setState({
      toAirport: event.target.value
    })
    console.log(toAirport)
  }
  travellerCounthandler = (event) => {
    this.setState({
      travellerCount: event.target.value
    })
    console.log(travellerCount)
  }
  classTypehandler = (event) => {
    this.setState({
      classType: event.target.value
    })
    console.log(classType)
  }
  selectedDatehandler = (event) => {
    this.setState({
      selectedDate: event.target.value
    })
    console.log(selectedDate)
  }*/

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fromAirport)
    console.log(toAirport)
    console.log(travellerCount)
    console.log(classType)
    console.log(selectedDate)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={fromAirport} onChange={e => setfromAirport(e.target.value)}
          className="form-select" id="fromAirport" aria-label="Default select example">
          <option selected>FROM</option>
          <option value="AJL"> Aizawl Airport</option>
          <option value="IXU"> Aurangabad Airport</option>
          <option value="ATQ"> Amritsar International Airport</option>
          <option value="IXB"> Bagdogra International Airport</option>
          <option value="IXG"> Belagavi International Airport</option>
          <option value="BLR"> Bengaluru International Airport</option>
          <option value="BBI"> Bhubaneswar International Airport</option>
          <option value="BHO"> Bhopal International Airport</option>
          <option value="IXC"> Chandigarh International Airport</option>
          <option value="MAA"> Chennai International Airport</option>
          <option value="CJB"> Coimbatore International Airport</option>
          <option value="DED"> Dehradun International Airport</option>
          <option value="DEL"> Delhi International Airport</option>
          <option value="DIB"> Dibrugarh Airport</option>
          <option value="DMU"> Dimapur International Airport</option>
          <option value="RDP"> Durgapur Airport</option>
          <option value="GAY"> Gaya International Airport</option>
          <option value="GOY"> Goa International Airport</option>
          <option value="GOP"> Gorakhpur International Airport</option>
          <option value="GAU"> Guwahati International Airport</option>
          <option value="HBX"> Hubli International Airport</option>
          <option value="HYD"> Hyderabad International Airport</option>
          <option value="IMF"> Imphal International Airport</option>
          <option value="IDR"> Indore International Airport</option>
          <option value="JLR"> Jabalpur International Airport</option>
          <option value="JAI"> Jaipur International Airport</option>
          <option value="IXJ"> Jammu International Airport</option>
          <option value="JDH"> Jodhpur International Airport</option>
          <option value="JRH"> Jorhat Airport</option>
          <option value="CNN"> Kannur International Airport</option>
          <option value="KJB"> Kurnool Airport</option>
          <option value="COK"> Kochi Airport</option>
          <option value="KLH"> Kolhapur Airport</option>
          <option value="CCU"> Kolkata International Airport</option>
          <option value="CCJ"> Kozhikode International Airport</option>
          <option value="LKO"> Lucknow International Airport</option>
          <option value="IXM"> Madurai International Airport</option>
          <option value="IXE"> Mangaluru International Airport</option>
          <option value="BOM"> Mumbai International Airport</option>
          <option value="MYQ"> Moisuru Airport</option>
          <option value="NAG"> Nagpur International Airport</option>
          <option value="PAT"> Patna International Airport</option>
          <option value="IXD"> Prayagraj Airport</option>
          <option value="PNQ"> Pune International Airport</option>
          <option value="IXZ"> Portblair Airport</option>
          <option value="RPR"> Raipur International Airport</option>
          <option value="RJA"> Rajahmundry International Airport</option>
          <option value="IXR"> Ranchi International Airport</option>
          <option value="SHL"> Shillong Airport</option>
          <option value="SAG"> Shirdi Airport</option>
          <option value="IXS"> Silchar International Airport</option>
          <option value="SXR"> Srinagar International Airport</option>
          <option value="STV"> Surat International Airport</option>
          <option value="TRV"> Tiruvananthapuram International Airport</option>
          <option value="TRZ"> Tiruchirappalli International Airport</option>
          <option value="TIR"> Tirupati Airport</option>
          <option value="TCR"> Tuticorin International Airport</option>
          <option value="UDR"> Udaipur International Airport</option>
          <option value="BDQ"> Vadodara International Airport</option>
          <option value="VNS"> Varanasi International Airport</option>
          <option value="VGA"> Vijaywada International Airport</option>
          <option value="VTZ"> Visakhapatnam International Airport</option>
        </select>
        <select value={toAirport} onChange={e => settoAirport(e.target.value)}
          className="form-select" id="toAirport" aria-label="Default select example">
          <option selected>TO</option>
          <option value="AJL"> Aizawl Airport</option>
          <option value="IXU"> Aurangabad Airport</option>
          <option value="ATQ"> Amritsar International Airport</option>
          <option value="IXB"> Bagdogra International Airport</option>
          <option value="IXG"> Belagavi International Airport</option>
          <option value="BLR"> Bengaluru International Airport</option>
          <option value="BBI"> Bhubaneswar International Airport</option>
          <option value="BHO"> Bhopal International Airport</option>
          <option value="IXC"> Chandigarh International Airport</option>
          <option value="MAA"> Chennai International Airport</option>
          <option value="CJB"> Coimbatore International Airport</option>
          <option value="DED"> Dehradun International Airport</option>
          <option value="DEL"> Delhi International Airport</option>
          <option value="DIB"> Dibrugarh Airport</option>
          <option value="DMU"> Dimapur International Airport</option>
          <option value="RDP"> Durgapur Airport</option>
          <option value="GAY"> Gaya International Airport</option>
          <option value="GOY"> Goa International Airport</option>
          <option value="GOP"> Gorakhpur International Airport</option>
          <option value="GAU"> Guwahati International Airport</option>
          <option value="HBX"> Hubli International Airport</option>
          <option value="HYD"> Hyderabad International Airport</option>
          <option value="IMF"> Imphal International Airport</option>
          <option value="IDR"> Indore International Airport</option>
          <option value="JLR"> Jabalpur International Airport</option>
          <option value="JAI"> Jaipur International Airport</option>
          <option value="IXJ"> Jammu International Airport</option>
          <option value="JDH"> Jodhpur International Airport</option>
          <option value="JRH"> Jorhat Airport</option>
          <option value="CNN"> Kannur International Airport</option>
          <option value="KJB"> Kurnool Airport</option>
          <option value="COK"> Kochi Airport</option>
          <option value="KLH"> Kolhapur Airport</option>
          <option value="CCU"> Kolkata International Airport</option>
          <option value="CCJ"> Kozhikode International Airport</option>
          <option value="LKO"> Lucknow International Airport</option>
          <option value="IXM"> Madurai International Airport</option>
          <option value="IXE"> Mangaluru International Airport</option>
          <option value="BOM"> Mumbai International Airport</option>
          <option value="MYQ"> Moisuru Airport</option>
          <option value="NAG"> Nagpur International Airport</option>
          <option value="PAT"> Patna International Airport</option>
          <option value="IXD"> Prayagraj Airport</option>
          <option value="PNQ"> Pune International Airport</option>
          <option value="IXZ"> Portblair Airport</option>
          <option value="RPR"> Raipur International Airport</option>
          <option value="RJA"> Rajahmundry International Airport</option>
          <option value="IXR"> Ranchi International Airport</option>
          <option value="SHL"> Shillong Airport</option>
          <option value="SAG"> Shirdi Airport</option>
          <option value="IXS"> Silchar International Airport</option>
          <option value="SXR"> Srinagar International Airport</option>
          <option value="STV"> Surat International Airport</option>
          <option value="TRV"> Tiruvananthapuram International Airport</option>
          <option value="TRZ"> Tiruchirappalli International Airport</option>
          <option value="TIR"> Tirupati Airport</option>
          <option value="TCR"> Tuticorin International Airport</option>
          <option value="UDR"> Udaipur International Airport</option>
          <option value="BDQ"> Vadodara International Airport</option>
          <option value="VNS"> Varanasi International Airport</option>
          <option value="VGA"> Vijaywada International Airport</option>
          <option value="VTZ"> Visakhapatnam International Airport</option>
        </select>
        <select value={travellerCount} onChange={e => settravellerCount(e.target.value)}
          className="form-select" id="travellerCount" aria-label="Default select example">
          <option>TRAVELLERS</option>
          <option>1</option>
          <option> 2</option>
          <option> 3</option>
          <option> 4</option>
          <option> 5</option>
          <option> 6</option>
          <option> 7</option>
          <option> 8</option>
          <option> 9</option>
          <option> 9+</option>
        </select>
        <select value={classType} onChange={e => setclassType(e.target.value)}
          className="form-select" id="classType" aria-label="Default select example">
          <option selected>CLASS</option>
          <option value="1"> Economy</option>
          <option value="2"> Business</option>
          <option value="3"> Premium Economy</option>
        </select>
        <div className="date-picker-wrapper">
          <DatePicker
            selected={selectedDate} onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            minDate={new Date()}
            className="col-sm-3"
            showYearDropdown
            showCurrentDate
          />
        </div>
        {/* <DatePicker */}
        {/* selected={selectedDate} onChange={selectedDate => setSelectedDate(selectedDate)} */}
        {/* className="col-sm-5" id="selectedDate" /> */}

        <button type="submit"
          class="btn btn-outline-success btn-lg"
          onClick={bookticket}>
          Book ticket
        </button>
      </form>
    </>
  )
}

export default Destinations