import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView, Platform,ScrollView } from 'react-native'
import React, { useState } from 'react'




const Contacts = () => {
    const [nome, setText] = useState('');
    const [email, setText2] = useState('');
    const [descricao, setText3] = useState('');
    console.log(nome);
    const handleSubmit = () => {
        if (!nome.trim() || !email.trim() || !descricao.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        // Lógica para enviar os dados para o servidor ou realizar outra ação
        Alert.alert('Submetido', 'O formulário foi submetido com sucesso!');
    };

    return (

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS=== 'ios' ? 'padding':'height'} >
            <ScrollView contentContainerStyle={styles.scrollView} >
                <Text style={styles.contform}>Contact Form</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={nome}
                    placeholder='Nome'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setText2}
                    value={email}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.input2}
                    onChangeText={setText3}
                    value={descricao}
                    multiline
                    placeholder='Descrição'
                  
                />
                
                <Button
                    title='Submit'
                    onPress={handleSubmit}
                />

            </ScrollView >
        </KeyboardAvoidingView>

    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#abdbe3',
    },

    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contform: {
        fontWeight: 'bold',
        fontSize: 40,
    },

    input: {
        width:300,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    input2: {
        width: 300,
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})