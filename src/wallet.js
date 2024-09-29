document.getElementById("connectBtn").addEventListener("click", async () => {
        const isConnected = await window.ic.plug.isConnected();

            // Jika belum terkoneksi, maka minta koneksi dari pengguna
                if (!isConnected) {
                        await window.ic.plug.requestConnect();
                            }

                                // Ambil Principal ID pengguna setelah terhubung
                                    const principalId = await window.ic.plug.agent.getPrincipal();
                                        document.getElementById("walletAddress").innerText = `Connected: ${principalId}`;
                                        });
                                        
})