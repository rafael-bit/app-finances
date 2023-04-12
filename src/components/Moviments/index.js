import {React, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatePresence, MotiText } from 'moti';

export default function Moviments({ data }) {

	const [showValue, setshowValue] = useState(false)

 return (
	 <TouchableOpacity style={styles.container} onPress={ () => setshowValue(!showValue) }>
		 <Text style={styles.date}>{data.date}</Text>
		 <View style={styles.content}>
			 <Text style={styles.label}>{data.label}</Text>
			 {showValue ? (
				 <AnimatePresence exitBeforeEnter>
					 <MotiText style={data.type === 1 ? styles.value : styles.espenses} from={{translateX: 100}} animate={{translateX: 0}} transition={{type: 'timing', duration: 500}}>{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</MotiText>
				 </AnimatePresence>
			 ) : (
					 <AnimatePresence>
						 <View style={styles.skeleton} />
					 </AnimatePresence>
			 )}
		 </View>
	 </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 24,
		borderBottomWidth: 0.5,
		borderBottomColor: 'silver'
	},

	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 2,
		marginBottom: 8,
	},

	date: {
		color: 'silver',
		fontWeight: 'bold'
	},

	label: {
		fontWeight: 'bold',
		fontSize: 15,
	},

	value: {
		fontSize: 16,
		color: '#2ecc71',
		fontWeight: 'bold'
	},

	espenses: {
		fontSize: 16,
		color: '#e74c3c',
		fontWeight: 'bold'
	},

	skeleton: {
		marginTop: 6,
		width: 85,
		height: 13,
		backgroundColor: '#DADADA',
		borderRadius: 8,
	}
})