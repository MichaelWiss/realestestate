import connectDB from "@/config/database";
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (request, { params }) => {
    try {
        await connectDB();

        const property = await Property.findBy(params.id);

        if (!property) return new Response('Property Not Found', { status: 404 });

        return new Response(JSON.stringify(property), {status: 200});
} catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
        status: 500 });
   }
};

export const POST = async (request) => {
    try {
        const formData = await request.formData();

        // Access all values from amenities and images
        const amenities = formData.getAll('amenities');
        const images = formData.getAll('images').filter((image) => image.name !== '');

        console.log(amenities, images);
        
        return new Response(JSON.stringify({message: 'Success'}), 
    { status: 200,
     });
    } catch (error) {
        return new Response('Failed to add property', { status: 500 });
    }
}