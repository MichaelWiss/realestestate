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

  export { fetchProperties };