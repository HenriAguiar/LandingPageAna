
export default function Page() {
  return (
    <>
      <div className=" fundoLilas">
        <div className="container containerCapa">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <div className="d-flex justify-content-start align-items-center">
                <h className="tituloSecao">CURSO ANA BANANA, O MELHOR CURSO DE BANANAGEM</h>
              </div>
              <div className="d-flex paragrafoSecao justify-content-start align-items-center pt-4 pb-4">
                <h>O curso ana banana é o curso da ana banana que te ensina a ser uma banana</h>
              </div>
              
              <div className="ratio ratio-16x9">
                <iframe
                  className="videoCapa d-flex align-items-center justify-content-center"
                  src='https://www.youtube.com/embed/6uo3Nj0sfSw'
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
    </>
  )
}