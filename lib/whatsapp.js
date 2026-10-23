import config from '../data/config.json';

/**
 * Génère un lien direct WhatsApp pour contacter le restaurant "Recette d'Afrique".
 * Format cible : https://wa.me/<numéro>?text=<message encodé>
 *
 * @param {string} [message] - Le message textuel à encoder dans le lien
 * @returns {string} L'URL complète WhatsApp
 */
export function getWhatsAppLink(message = '') {
  const numero = config.whatsapp;

  if (!message || !message.trim()) {
    return `https://wa.me/${numero}`;
  }

  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${numero}?text=${encodedMessage}`;
}

/**
 * Génère un lien WhatsApp pour passer commande d'un plat spécifique.
 *
 * @param {Object} plat - Objet plat contenant au minimum 'nom' et 'prix'
 * @param {number} [quantite=1] - Nombre de portions
 * @returns {string} L'URL complète WhatsApp avec le message de commande
 */
export function getWhatsAppOrderLink(plat, quantite = 1) {
  if (!plat || !plat.nom) {
    return getWhatsAppLink();
  }

  const qte = Number(quantite) > 0 ? Number(quantite) : 1;
  const total = (plat.prix || 0) * qte;
  const message = `Bonjour Recette d'Afrique, je souhaite commander : ${plat.nom} (x${qte}) pour un total de ${total} FCFA. Est-ce disponible ?`;

  return getWhatsAppLink(message);
}

export default getWhatsAppLink;

