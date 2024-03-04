import PropertyCard from '@/components/PropertyCard';

async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/properties`);

    if(!res.ok) {
      throw Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}



const PropertyPage = async () => {
  const properties = await fetchProperties();
  return (
    <section className="px-4 py-6">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
        Recent Properties
      </h2>
        {properties.length === 0 ? (
          <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { properties.map((property) => (
              <PropertyCard key={property._id} 
                property={property} />
            ))}
        </div>
          )}
        
    </div>
    </section>
    
    );
};

export default PropertyPage;