import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';

// Import individual post data
import { elDiaQueTeConoci } from './el-dia-que-te-conoci';
import { pequenosMomentos } from './pequenos-momentos';
import { lugaresEspeciales } from './lugares-especiales';
import { risasCompartidas } from './risas-compartidas';
import { creciendo } from './creciendo';
import { nuestroPrimerViaje } from './nuestro-primer-viaje';
import { nuestroPrimer } from './nuestro-primer';
import { loQueNoTienePalabras } from './lo-que-no-tiene-palabras';
import { perderloTodo } from './perderlo-todo';
import { queriendoLoQueNoPediste } from './queriendo-lo-que-no-pediste';
import { quedarmePorAmor } from './quedarme-por-amor';
import { miSorpresa } from './mi-sorpresa';
import { loQueNoSospechamos } from './lo-que-no-sospechamos';
import { diciembreYDisfrutar } from './diciembre-y-disfrutar';

// Combine all posts into a single array
export const localPosts: LocalPost[] = [
  elDiaQueTeConoci,
  pequenosMomentos,
  lugaresEspeciales,
  risasCompartidas,
  creciendo,
  nuestroPrimerViaje,
  nuestroPrimer,
  loQueNoTienePalabras,
  perderloTodo,
  queriendoLoQueNoPediste,
  quedarmePorAmor,
  miSorpresa,
  loQueNoSospechamos,
  diciembreYDisfrutar
]; 