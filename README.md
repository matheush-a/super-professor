# super-professor
Teste prático desenvolvido para oportunidade de Desenvolvedor Full Stack. O back-end é desenvolvido em NestJS, um framework Node.js e o front-end é desenvolvido em Vue.js na versão 3
<br><br>Se houverem quaisquer dúvidas ou problemas na execução do projeto, estou à disposição: matheusalmeida97@proton.me

## PROJETO EXECUTANDO NO BUCKET
http://vuejs-superprofessor.s3-website-sa-east-1.amazonaws.com/

## MER
O Modelo Entidade Relacionamento (MER) a seguir descreve o sistema de matrículas implementado.
<br>
Vale ressaltar o motivo para algumas decisões:
- Sabemos que geralmente é possível um **acadêmico** se matricular em um ou vários **cursos** (N para N) o que geraria a criação de uma tabela para a relação de **acadêmico** com **curso**. Porém para simplificar o escopo, cada **acadêmico** só pode se matricular em um **curso** (N para 1);
- Documento poderia ser abstraído como uma entidade e ter um relacionamento de 1 para 1 com a entidade **acadêmico** porém também para simplificação de escopo, documento é um atributo da entidade **acadêmico** e foi estabelecida uma relação entre **acadêmico** e **tipo_documento** para distinguir se o documento enviado é do tipo cpf ou rg.

![sistemaDeMatricula_MER_UML](https://github.com/matheush-a/super-professor/assets/33291961/1cc0d149-058c-45e6-8184-cac6b7c279b6)

## FRONT-END
O front-end da aplicação foi desenvolvido em Vue.js e está disponível em um bucket Amazon S3.

O README.md do front-end está disponível em:
https://github.com/matheush-a/super-professor/tree/main/frontend

## BACK-END
O back-end da aplicação foi desenvolvido em NestJS e está disponível em um servidor Amazon EC2.

O README.md da api está disponível em:
https://github.com/matheush-a/super-professor/tree/main/backend
