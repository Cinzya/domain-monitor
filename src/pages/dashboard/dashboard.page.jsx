import React from 'react';
import Navigation from '../../components/navigation';
import List from '../../components/list';
import Intro from '../../components/intro';

const Dashboard = () => (
    <div>
        <main>
            <section>
                <Intro />
                <List />
            </section>
        </main>
        <Navigation />
    </div>

)

export default  Dashboard;