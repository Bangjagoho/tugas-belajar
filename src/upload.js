document.getElementById("uploadForm").addEventListener("submit", async (e) => {
        e.preventDefault();

            const fileInput = document.getElementById("fileInput");
                const file = fileInput.files[0];

                    if (!file) {
                            document.getElementById("status").innerText = "Please select a file.";
                                    return;
                                        }

                                            const reader = new FileReader();
                                                reader.onload = async () => {
                                                        const fileData = new Uint8Array(reader.result);

                                                                // Ambil Principal dari Plug Wallet (anggap user sudah connect)
                                                                        const principalId = await window.ic.plug.agent.getPrincipal();

                                                                                // Panggil fungsi backend ICP untuk mengunggah file
                                                                                        const response = await actor.Storage.uploadFile(principalId, file.name, fileData);

                                                                                                if (response) {
                                                                                                            document.getElementById("status").innerText = "Upload successful!";
                                                                                                                    } else {
                                                                                                                                document.getElementById("status").innerText = "Upload failed. Please try again.";
                                                                                                                                        }
                                                                                                                                            };

                                                                                                                                                reader.readAsArrayBuffer(file);
                                                                                                                                                });
                                                                                                                                                
})