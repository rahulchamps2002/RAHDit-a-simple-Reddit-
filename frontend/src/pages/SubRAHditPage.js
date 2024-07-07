import React from 'react';
import { useParams } from 'react-router-dom';
import SubRAHdit from '../components/SubRAHdit';

function SubRAHditPage() {
    const { subRAHditName } = useParams();
    return <SubRAHdit subRAHditName={subRAHditName} />;
}

export default SubRAHditPage;
