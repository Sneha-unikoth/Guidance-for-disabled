import Card from 'react-bootstrap/Card';

function Toiletlocation() {
  return (
    <div>
    <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>Public toilet mananchira</h2>
        
          <h6> Address:Public toilet mananchira(P.O), Kozhikode
               PIN- 673015</h6>
            
             <h3> Phone:0495-2414002</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <div id='sixth'>
    <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>Public bathroom panniyankara</h2>
        
          <h6>Address:public bathroom panniyankara po,
             Kozhikode PIN- 673612</h6>
            
             <h3> Phone:4962602040</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    <div id='seventh'>
    <Card style={{ width: '27rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h2>public bathroom atholi</h2>
        
          <h6> Address:public bathroom atholi (po)Kozhikode
               PIN- 673631</h6>
            
             <h3> Phone:  0495-2482230</h3>

      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Toiletlocation;