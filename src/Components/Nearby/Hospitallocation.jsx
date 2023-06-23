// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Hospitallocation() {
  return (
    <div>
    <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>BABY MEMORIAL HOSPITAL</h2>
        
          <h6> Address: Indira Gandhi Rd, Arayidathupalam, Kozhikode, Kerala 673004</h6>
            
             <h3> Phone: 0495 277 7777</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <div id='second'>
    <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>PVS SUNRISE HOSPITAL</h2>
        
          <h6>Address:Railway Station Rd, near Railway Station, Palayam, Kozhikode, Kerala 673002</h6>
            
             <h3> Phone:0495 270 7270</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    <div id='third'>
    <Card style={{ width: '28rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>ASTER MIMS HOSPITAL</h2>
        
          <h6> Address:  Mini Bypass Rd, Govindapuram, Kozhikode, Kerala 673016</h6>
            
             <h3> Phone: 0495 248 8222</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Hospitallocation;