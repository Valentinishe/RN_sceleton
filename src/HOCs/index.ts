import { compose } from 'recompose';
import I18N from './I18N';
import Validation from './Validation';

export default compose(Validation, I18N);
