import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
	 <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
		 <TouchableOpacity style={styles.actionButton}>
			 <View style={styles.areaButton}>
				 <AntDesign name="addfolder" size={26} color="#000" />
			 </View>
			 <Text style={styles.labelButton}>Entradas</Text>
		 </TouchableOpacity>

		 <TouchableOpacity style={styles.actionButton}>
			 <View style={styles.areaButton}>
				 <AntDesign name="tagso" size={30} color="#000" />
			 </View>
			 <Text style={styles.labelButton}>Compras</Text>
		 </TouchableOpacity>

		 <TouchableOpacity style={styles.actionButton}>
			 <View style={styles.areaButton}>
				 <AntDesign name="creditcard" size={26} color="#000" />
			 </View>
			 <Text style={styles.labelButton}>Carteira</Text>
		 </TouchableOpacity>

		 <TouchableOpacity style={styles.actionButton}>
			 <View style={styles.areaButton}>
				 <AntDesign name="barcode" size={26} color="#000" />
			 </View>
			 <Text style={styles.labelButton}>Boletos</Text>
		 </TouchableOpacity>

		 <TouchableOpacity style={styles.actionButton}>
			 <View style={styles.areaButton}>
				 <AntDesign name="setting" size={26} color="#000" />
			 </View>
			 <Text style={styles.labelButton}>Contas</Text>
		 </TouchableOpacity>
	 </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		maxHeight: 84,
		marginBottom: 14,
		marginTop: 18,
		paddingEnd: 17,
		paddingStart: 20,
	},

	areaButton: {
		backgroundColor: '#DADADA',
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
	},
	
	actionButton: {
		alignItems: 'center',
		marginRight: 30,
	},

	labelButton: {
		marginTop: 4,
		textAlign: 'center',
		fontWeight: 'bold',
	}
})