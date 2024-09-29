actor Storage {
        stable var files : [(Principal, Text, Blob)] = [];

            public shared(msg) func uploadFile(userId : Principal, fileName : Text, fileData : Blob) : async Bool {
                        // Simpan file bersama metadata pengguna
                                files := [(userId, fileName, fileData)] # files;
                                        return true;
            };

                public query func getFiles(userId : Principal) : async [(Text, Blob)] {
                            // Filter file berdasarkan pengguna yang memintanya
                                    return files.filter((u, _, _) -> u == userId).map((_, name, data) -> (name, data));
                };
}

                }
            }
}