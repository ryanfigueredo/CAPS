-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" SERIAL NOT NULL,
    "atendimento" INTEGER NOT NULL,
    "recepcao" INTEGER NOT NULL,
    "funcionarios" INTEGER NOT NULL,
    "medico" INTEGER NOT NULL,
    "psicologos" INTEGER NOT NULL,
    "farmacia" INTEGER NOT NULL,
    "recomendacao" INTEGER NOT NULL,
    "sugestao" TEXT,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);
