import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List } from 'semantic-ui-react';


function Footer(props) {
    return(
        <Grid style={{'background-color': '#9f7de8'}} textAlign='center' centered columns={2}>
            <Grid.Column centered textAlign='center'>
                <br></br>
                <p>Links</p>
                <List>
                    <List.Item><Link to='/'>HOME</Link></List.Item>
                    <List.Item><Link to='/predict'>PREDICT</Link></List.Item>
                    <List.Item><Link to='/explain'>EXPLAIN</Link></List.Item>
                </List>
            </Grid.Column>
            <Grid.Column centered textAlign='center'>
                <br></br>
                <h5>Contact Us</h5>
                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:biothings@googlegroups.com">
                    biothings@googlegroups.com</a>
                    <p>© Copyright 2017-2020 The Su/Wu Lab.</p>
            </Grid.Column>
        </Grid>
    // <div className="footer">
    //     <div className="container">
    //         <div className="row justify-content-center">
    //             <div className="col-4 offset-1 col-sm-5">
    //                 <h5>Links</h5>
    //                 <ul className="list-unstyled">
    //                     <li><Link to='/predict'>PREDICT</Link></li>
    //                     <li><Link to='/explain'>EXPLAIN</Link></li>
    //                 </ul>
    //             </div>
    //             <div className="col-7 col-sm-5">
    //                 <h5>Contact Us</h5>
    //                   <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:biothings@googlegroups.com">
    //                      biothings@googlegroups.com</a>
    //             </div>
    //             <div className="col-12 col-sm-4 align-self-center">
    //                 <div className="text-center">
    //                     <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fbiothings.io%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=biothingsapi&tw_p=followbutton"><i className="fa fa-twitter"></i></a>
    //                     <a className="btn btn-social-icon" href="mailto:mailto:biothings@googlegroups.com"><i className="fa fa-envelope-o"></i></a>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="row justify-content-center">
    //             <div className="col-auto">
    //                 
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default Footer;