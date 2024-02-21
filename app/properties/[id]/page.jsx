'use client';
import { useRouter, useParams } from "next/navigation";

const PropertyPage = () => {
    const router = useRouter();
    const { id } = useParams();

    console.log('Hello');

    return (<div>
    <button onClick={() => router.push('/')}
        className='bg-blue-500 p-2'>
        Go Home { id }
        </button>
    </div>
    );
};
export default PropertyPage;