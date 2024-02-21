'use client';
import { useRouter } from "next/navigation";

const PropertyPage = () => {
    const router = useRouter();

    console.log('Hello');

    return (<div>
    <button onClick={() => router.push('/')}
        className='bg-blue-500 p-2'>Go Home</button>
    </div>
    );
};
export default PropertyPage;