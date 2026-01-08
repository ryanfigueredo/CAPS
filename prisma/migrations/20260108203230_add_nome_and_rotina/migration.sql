-- AlterTable
ALTER TABLE "quiz_respostas" ADD COLUMN     "nome" TEXT;

-- CreateTable
CREATE TABLE "rotina_diaria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "rotina" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rotina_diaria_pkey" PRIMARY KEY ("id")
);
