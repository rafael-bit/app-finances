import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
	{
		id: 1,
		label: 'Boleto conta de água',
		value: 300.00,
		date: '17/09/2022',
		type: 0
	},

	{
		id: 2,
		label: 'Pagamento, PIX',
		value: 600.00,
		date: '17/09/2022',
		type: 1
	},

	{
		id: 3,
		label: 'Presente, PIX',
		value: 1000.00,
		date: '16/09/2022',
		type: 1
	}

]

const soma = list.reduce((somaParcial, item) => somaParcial + item.value, 0);

export default function Home() {
	return (
		<View style={styles.container}>
			<Header name="Rafael Áquila" />
			<Balance saldo="16.000,00" gastos="6.000,00" />

			<Actions />

			<Text style={styles.title}>Últimas movimentações</Text>

			<FlatList
				style={styles.list}
				data={list}
				keyExtractor={(item) => String(item.id)}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <Moviments data={item} /> }
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f1f1f152',
	},

	title:{
		fontSize: 17,
		fontWeight: 'bold',
		margin: 14,
	},

	list:{
		marginStart: 14,
		marginEnd: 14,
	},
});