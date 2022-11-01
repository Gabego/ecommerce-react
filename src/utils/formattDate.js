const formatDate = date => {

  date = date.replace(/\D/g, ' ');
  let componentes = date.split(' ');
  --componentes[1];
  let fecha = new Date(Date.UTC.apply(null, componentes));
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  return fecha.toLocaleDateString('en-us', opciones)

}

export default formatDate