import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This is a fake store using <strong>Context API</strong></p>

                <a className="btn btn-primary" href="https://github.com/TegaDaniel">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Profile</span></a>
            </div>
        </Layout>
     );
}
 
export default About;