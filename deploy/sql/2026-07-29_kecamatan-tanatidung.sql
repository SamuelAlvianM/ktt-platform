-- Lengkapi daftar kecamatan Kabupaten Tana Tidung di dropdown pilih kecamatan.
-- Idempoten & aman untuk DB produksi: hanya MENAMBAH baris master wilayah
-- (INSERT IGNORE pada kolom unik `kode`), tidak menghapus/menimpa data warga.
--
-- Cara pakai (di VPS, DB SIDAKO):
--   mysql <DB_NAME> < deploy/sql/2026-07-29_kecamatan-tanatidung.sql
--
-- Kode mengikuti Kemendagri (65.04.xx). "Sesayap" (6504010) biasanya sudah ada
-- dari seed lama; INSERT IGNORE membuatnya tidak menimbulkan duplikat.

INSERT IGNORE INTO m_wilayah (kode, nama, jenis) VALUES
  ('6504010', 'Sesayap',       'KECAMATAN'),
  ('6504020', 'Sesayap Hilir', 'KECAMATAN'),
  ('6504030', 'Tana Lia',      'KECAMATAN'),
  ('6504040', 'Betayau',       'KECAMATAN'),
  ('6504050', 'Muruk Rian',    'KECAMATAN');
