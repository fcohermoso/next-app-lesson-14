export default function Server({ searchParams }: { readonly searchParams: { readonly nombre: string } }) {
    if (!searchParams.nombre) return <h1>No existe un nombre en los parámetros</h1>
  
    return <h1>Tu nombre es: {searchParams.nombre}</h1>;
}
