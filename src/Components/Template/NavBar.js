import React from 'react'
import { Nav, Icon,  Sidenav, Sidebar , Navbar }  from 'rsuite'
import { Link } from 'react-router-dom'




const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#f44336',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

/* const iconStyles = {
  width: 70,
  height: 70,
  lineHeight: '56px',
  textAlign: 'center'
}; */


const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="default" className="nav-toggle">
      <Navbar.Body>

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default class NavBar extends React.Component  {
 
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page">
          <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expand ? 260 : 56}
            collapsible
          >
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="default">
              <Sidenav.Header>
                <div style={headerStyles}>
                  <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                  <span style={{ marginLeft: 12 }}> WISH LIST</span>
                </div>
              </Sidenav.Header>
              <Sidenav.Body style={{height: 918}} >
                <Nav>

                  <Link to="/">
                     <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />} 
                     style ={{height: 229.5}}
                     title="Home" />
                   </Link>

                   <Link to="/additem">
                     <Nav.Item eventKey="2" icon={<Icon icon="group" />} style ={{height: 229.5}}
                      title="Add Item" />  
                  </Link>

                 <Link to="/edititem">
                  <Nav.Item 
                    eventKey="3"
                    trigger="hover"
                    title="Edit Item"
                    icon={<Icon icon="magic" />}
                    placement="rightStart"
                    style ={{height: 220.5}}
                   />
                  </Link>

                <Link to="/getitem">
                  <Nav.Item 
                    eventKey="4"
                    trigger="hover"
                    title="Get Item"
                    icon={<Icon icon="gear-circle" />}
                    placement="rightStart"
                    style ={{height: 150.5}}

                  />
                </Link>

                <Link to="/removeItem">
                  <Nav.Item 
                    eventKey="4"
                    trigger="hover"
                    title="Remove Item"
                    icon={<Icon icon="gear-circle" />}
                    placement="rightStart"

                  />
                </Link>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle />
          </Sidebar>
          
          </div>
     
        
      
    );
  }
  
}