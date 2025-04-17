from flask import Flask, request, jsonify


app = Flask(__name__)

# Configurações do SharePoint (as mesmas utilizadas em main.py)


# Instancia a classe SharePointAPI
#api_instance = SharePointAPI(CLIENT_ID, CLIENT_SECRET, TENANT_ID, SITE_ID)


@app.route('/reformatributaria', methods=['GET', 'POST'])
def generate_document():
    try:
        # Extrai o parâmetro PrimaryKey da requisição (GET ou POST)
        primary_key = None
        if request.method == 'GET':
            primary_key = request.args.get('PrimaryKey')
        else:  # POST
            if request.is_json:
                data = request.get_json()
                primary_key = data.get('PrimaryKey')
            else:
                primary_key = request.form.get('PrimaryKey')
        
        if primary_key is None:
            return jsonify({'error': 'PrimaryKey não fornecido'}), 400
        
        # Converte o PrimaryKey para o tipo numérico adequado (aqui, float)
        try:
            primary_key_value = int(primary_key)
        except ValueError:
            return jsonify({'error': 'Valor inválido para PrimaryKey'}), 400

        # Executa a geração do documento chamando o método process_module_and_companies
        print("Valor a ser procurado:", primary_key_value)
        total = api_instance.process_module_and_companies(primary_key_value)
        
        # Retorna uma resposta com a mensagem de sucesso e o total de investimento calculado
        return jsonify({
            'message': 'Documento gerado com sucesso',
            'investment_total': total
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
