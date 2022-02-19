type Callback = ( event: unknown ) => void

export class Observable {
	private callback: Callback [] = []


	connect(callback: Callback) {
		this.callback.push( callback )
	}

	disconnect(callback: Callback) {
		this.callback = this.callback.filter( item => { return item !== callback })
	}

	 notify( event: unknown ) {
		this.callback.forEach( callback => callback( event) )
	 }
}