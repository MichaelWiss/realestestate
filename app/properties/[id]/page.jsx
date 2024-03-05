'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';


const PropertyPage = () => {
    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyData = async () => {
            if (!id) return;
            try {

            } catch (error) {

            }

        }
    }, [id, property]);



    return (<div>
        PropertyPage
    </div>
    );
};
export default PropertyPage;