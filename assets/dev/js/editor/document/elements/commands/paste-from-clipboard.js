import { Paste } from './paste';

export class PasteFromClipboard extends Paste {

	validateArgs( args ) {
		this.requireContainer( args );
	}

	getStorageData( args ) {
		return super.getStorageData( args );
	}

	apply( args ) {
		alert( 'test' );

		return super.apply( args );
	}
}

export default PasteFromClipboard;
