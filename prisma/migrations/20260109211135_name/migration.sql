-- AlterTable
ALTER TABLE "avaliacoes" ADD COLUMN     "nome" TEXT;

-- CreateTable
CREATE TABLE "avaliacao_rotina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "respostas" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacao_rotina_pkey" PRIMARY KEY ("id")
);
