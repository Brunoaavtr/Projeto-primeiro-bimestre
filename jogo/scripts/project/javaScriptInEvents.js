

const scriptsInEvents = {

	async EventJogo_Event68_Act3(runtime, localVars)
	{
		// 1. Busca
		const vitoriaSprite = runtime.objects.vitoria.getFirstInstance();
		
		// 2. Verifica
		if (vitoriaSprite) {
		    // 3. visível
		    vitoriaSprite.isVisible = true;
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
