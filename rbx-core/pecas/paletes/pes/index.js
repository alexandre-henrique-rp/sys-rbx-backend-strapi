const calcPe = async base => {
	const { longPe, vaoMaximoEntrePes, tipos_de_pe } = base;
	const { slug } = tipos_de_pe;

	const calcPeFn = require(`./${slug}`);
	const pePronto = await calcPeFn(base);

	const pesQtde = Math.max(Math.ceil(longPe / vaoMaximoEntrePes) + 1, 2);
	const pes = {
		pePronto,
		qtde: pesQtde,
		custoMP: pesQtde * pePronto.custoMP,
	};

	console.log("pes/index");
	return pes;
};
module.exports = calcPe;
