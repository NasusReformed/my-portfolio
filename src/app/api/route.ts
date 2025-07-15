import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Datos del formulario de contacto:', data);

  // Aquí podrías enviar un email, guardar en una base de datos, etc.
  // Por ahora, solo devolveremos un mensaje de éxito.

  return NextResponse.json({ message: 'Mensaje recibido con éxito', data });
}