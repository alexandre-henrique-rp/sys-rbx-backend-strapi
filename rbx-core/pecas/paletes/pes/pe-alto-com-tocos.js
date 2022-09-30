const calcPeFn = async base => {
	const { compPe, tipos_de_pe } = base;
	let { longarina, pregoG } = tipos_de_pe;

	const materiasPrimas = await strapi.services["materia-prima"].find({
		_id: { $in: [longarina, pregoG] },
	});

	longarina = materiasPrimas[0];
	pregoG = materiasPrimas[1];

	const compToco = 15;
	const tocoPronto = {
		comp: compToco,
		larg: longarina.largura,
		alt: longarina.espessura * 3,
		qtde: Math.max(Math.ceil(compPe / 30), 2),
		custoMP: (compToco / 100) * 3 * longarina.precoVenda,
	};

	pregoG.qtde = tocoPronto.qtde * 8;
	pregoG.custoMP = pregoG.qtde * pregoG.precoVenda;

	const pePronto = {
		comp: compPe,
		larg: longarina.largura,
		alt: longarina.espessura * 2 + tocoPronto.alt,
		toco: tocoPronto,
		custoMP:
			((compPe * 2 + compToco * 3 * tocoPronto.qtde) / 100) *
			longarina.precoVenda,
	};

	console.log("pes/pe-alto-com-tocos");
	return pePronto;
};
module.exports = calcPeFn;
