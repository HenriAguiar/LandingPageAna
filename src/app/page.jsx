import Carrossel from "./components/Carrossel";

export default function Page() {
  return (
    <>
      <div className="fundoBranco">
        <div className="container containerCapa">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-xl-2 gx-5">
              <div className="col">
                <div className="d-flex justify-content-start align-items-center">
                  <h className="tituloSecao">CURSO ANA BANANA, O MELHOR CURSO DE BANANAGEM, SE TORNE UMA BANANA EM ATÉ 30 DIAS</h>
                </div>
                <div className="d-flex paragrafoSecao justify-content-start align-items-center pt-4 pb-5">
                  <h>O curso ana banana é o curso da ana banana que te ensina a ser uma banana em até 30 dias, sem complicação, com um plano claro para você obter os melhores resultados</h>
                </div>
                <div className="d-none d-sm-none d-xl-block pt-1">
                  <div className="row row-cols-3 pt-4">
                    <div className="col">
                      <div className="row row-cols-1">
                        <div className="col">
                          <div className="d-flex align-items-center justify-content-center">
                            <img src="/images/check.svg" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center justify-content-center">
                            <h className="legendaIcone">
                              Acesso imediato
                            </h>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row row-cols-1">
                        <div className="col">
                          <div className="d-flex align-items-center justify-content-center">
                            <img src="/images/chat.svg" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center justify-content-center">
                            <h className="legendaIcone">
                              Suporte à dúvidas
                            </h>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row row-cols-1">
                        <div className="col">
                          <div className="d-flex align-items-center justify-content-center">
                            <img src="/images/lock.svg" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center justify-content-center">
                            <h className="legendaIcone">
                              Garantia de 7 dias
                            </h>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="d-flex align-items-center justify-content-center"
                    src='https://www.youtube.com/embed/94tuRCrB8bM'
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="d-flex justify-content-center aling-items-center  pt-3 pb-3">
                  <a href="https://khaledkzy.github.io/pixel-vh-vw-converter/" className="link">
                    <div className="botao">
                      <h className="textoBotao">Seja uma banana</h>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col iconesSmall pb-5">
              <div className="row row-cols-3 pt-4">
                <div className="col">
                  <div className="row row-cols-1">
                    <div className="col">
                      <div className="d-flex align-items-center justify-content-center">
                        <img src="/images/check.svg" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center justify-content-center">
                        <h className="legendaIcone">
                          Acesso imediato
                        </h>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row row-cols-1">
                    <div className="col">
                      <div className="d-flex align-items-center justify-content-center">
                        <img src="/images/chat.svg" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center justify-content-center">
                        <h className="legendaIcone">
                          Suporte à dúvidas
                        </h>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row row-cols-1">
                    <div className="col">
                      <div className="d-flex align-items-center justify-content-center">
                        <img src="/images/lock.svg" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center justify-content-center">
                        <h className="legendaIcone">
                          Garantia de 7 dias
                        </h>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fundoCinza">
        <div className="container containerTabletHalf d-flex flex-column justify-content-center align-items-center">
          <div className="">
            <div className="d-flex justify-content-center align-items-center">
              <h className="tituloSecaoCentro">CENTENAS DE PESSOAS JÁ SE TORNARAM BANANAS</h>
            </div>
            <div className="d-flex paragrafoSecaoCentro justify-content-start align-items-center pt-4 pb-5">
              <h>Veja o que algumas alunas que já obtiveram sucesso em se tornar bananas tem a dizer sobre o curso: </h>
            </div>
            <div>
              <div className="textoAuxiliar pb-2">
                Arraste para o lado.
              </div>
            </div>
          </div>
        </div>
        <Carrossel></Carrossel>
      </div>
    </>
  )
}