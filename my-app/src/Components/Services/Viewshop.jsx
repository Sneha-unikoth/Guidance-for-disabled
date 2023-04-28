import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Viewshop() {
  return (
  <div>
    <Card style={{ width: '29rem' }}>
      <Card.Body>
      <h2>EQUIPMENT STORES</h2>
        
        <h6> Address: Equipments store in RK building Kozhikode 673004</h6>
          
           <h3> Phone: 0495 277 7777</h3>

    
      </Card.Body>
    </Card>
    <div id='eighth'>
    <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>BRILLIANT BRAINS</h2>
        
          <h6>Address: Brilliants brains mavoorroad po,
             Kozhikode PIN- 673612</h6>
            
             <h3> Phone:4962602040</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    <div id='nineth'>
    <Card style={{ width: '27rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>ELITE EQIPMENTS</h2>
        
          <h6> Address:Elite equipments Petta, Feroke (P.O), Kozhikode
               PIN- 673631</h6>
            
             <h3> Phone:  0495-2482230</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Viewshop;
