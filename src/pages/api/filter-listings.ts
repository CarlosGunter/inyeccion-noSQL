import { MongoClient } from 'mongodb'
import { MONGO_URI } from 'astro:env/server'

export const prerender = false
const client = new MongoClient(MONGO_URI)

/**
 * Props del endpoint
 */
interface APIPostLoginProps {
  /** Request object */
  request: Request
}

/**
 * Endpoint para obtener los listings del dataset de Airbnb
 * @async
 * @param {Request} props.request - Request object
 * @returns {Response} con los listings filtrados por precio
 */
export async function POST({ request }: APIPostLoginProps): Promise<Response> {
  try {
    // Verificar que el método sea POST
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ message: 'Method not allowed' }),
        { status: 405 }
      )
    }
    // Obtener los datos del body
    const filters = await request.json()
    // Conexión a la colección de MongoDB
    await client.connect()
    const admin = client.db("sample_airbnb")
    const collection = admin.collection('listingsAndReviews')
    // Filtrar los listings por precio
    const listings = await collection.find(filters).limit(5).toArray()
    // Verificar si se encontraron listings
    if (listings.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No listings found' }),
        { status: 404 }
      )
    }
    // Formatear los listings
    // Solo se requiere el id, name, summary y price
    const formattedListings = listings.map((listing) => ({
      id: listing._id,
      name: listing.name,
      description: listing.summary,
      price: listing.price.toString(),
      imageUrl: listing.images.picture_url || ''
    }))
    // Retornar los listings
    return new Response(
      JSON.stringify({ listings: formattedListings }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    )
  } finally {
    // Cerrar la conexión a la base de datos
    await client.close()
  }
}