from flask import Flask, request, jsonify
from flask_cors import CORS  # ← Importa o módulo

from gera_analise_gemini import gerar_avaliacao_reforma  # ← Importa a classe GeraAnaliseGemini

app = Flask(__name__)
CORS(app)  # ← Habilita CORS para todas as rotas

@app.route('/reformatributaria', methods=['POST'])
def upload_json():
    if request.is_json:
        try:
            data = request.get_json()
            print("JSON recebido com sucesso:")
            import json
            # print(json.dumps(data, indent=4, ensure_ascii=False))
            relatorio = gerar_avaliacao_reforma(json.dumps(data, indent=4, ensure_ascii=False))
            print("✅ Relatório gerado com sucesso!")

            # Salvar o relatório em um arquivo HTML (sobrescrevendo se já existir)
            with open('relatorio.html', 'w', encoding='utf-8') as f:
                f.write(relatorio)

            return jsonify({
                "status": "sucesso",
                "mensagem": "JSON recebido com sucesso!",
                "empresa": data.get("empresa", {}).get("razao_social", "Empresa não informada")
            }), 200

        except Exception as e:
            print("❌ Erro ao processar JSON:", e)
            return jsonify({
                "status": "erro",
                "mensagem": "Erro ao processar o JSON enviado."
            }), 500
    else:
        return jsonify({
            "erro": "Requisição não contém JSON válido"
        }), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3375)
